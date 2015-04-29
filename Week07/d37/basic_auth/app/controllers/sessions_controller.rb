class SessionsController < ApplicationController

  # Login page (GET)
  def new
  end

  # Set the session (POST)
  def create
    # render :json => params[:user]
    # @user = User.find_by_email(params[:user][:email]).try(:authenticate, params[:user][:password])
    @user = User.authenticate(params[:user][:email], params[:user][:password])
    # render json: @user

    if @user
      session[:user_id] = @user.id
      flash[:success] = "Login Successful!"
      redirect_to root_path
    else
      flash[:danger] = "Credentials Invalid"
      render :new
    end
  end

  # Delete the session (DELETE typically)
  def destroy
    session[:user_id] = nil
    flash[:info] = "You have successfully logged out"
    redirect_to login_path
  end

end
