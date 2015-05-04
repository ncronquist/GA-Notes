class PasswordsController < ApplicationController

  def new

  end

  def create
    # render :json => params

    user = User.find_by_email(params[:email])

    if user
      user.set_password_reset
      UserMailer.password_reset(user).deliver
    end

    # render :plain => "Password was reset"
    flash[:success] = "Password was Reset"
    redirect_to login_path
  end

  def edit
    # href="http://localhost:3000/passwords/gbIKCj2ufa1PyLFKWhATkQ/edit"
    @user = User.find_by_code(params[:id])

    # render :json => @user
  end

  def update
    user = User.find_by_code(params[:id])

    if user && Time.new < user.expires_at

      user.password = params[:user][:password]
      user.code = nil
      user.expires_at = nil
      user.save
    end

    # render :json => user
    flash[:success] = "Password was updated successfully"
    redirect_to login_path

  end

end
