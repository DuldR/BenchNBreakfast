class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        @user.password = user_params[:password]

        if @user.save
            render json: @user
        else
            render json: ["username taken"], status: 422
        end
        

    end

    private 

    def user_params
        params.require(:user).permit(:username, :password)
    end


end
