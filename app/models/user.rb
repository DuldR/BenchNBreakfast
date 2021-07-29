class User < ApplicationRecord

    attr_reader :password

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password_digest, presence: { message: "Password can't be blank" }
    validates :password, length: { minimum: 6, allow_nil: true }


    # has_many :bench_reviews, dependent: :destroy
    
    # has_many :reviews,
    # through: :bench_reviews,
    # source: :review
    has_many :reviews

   

    before_validation(on: :create) do
        :ensure_session_token
    end
  

    after_initialize do |user|
        ensure_session_token
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)

        if user.nil?
            return nil
        end

        if user.is_password?(password)
            return user
        else
             return nil
        end
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        check = BCrypt::Password.new(password_digest)
        check.is_password?(password)
    end


    private
    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
    


end
