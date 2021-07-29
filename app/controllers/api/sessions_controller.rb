class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(sessions_params[:username], sessions_params[:password])
        
        if @user.nil?
            render json: ['Wrong credz'], status: 401
        else
            login!(@user)
            render json: @user
        end
    end


    def destroy

       if logged_in?
        logout!
        render json: {}
       else
        render json: 404
       end




    end


    private
    def sessions_params
        params.require(:session).permit(:username, :password)
    end
end
