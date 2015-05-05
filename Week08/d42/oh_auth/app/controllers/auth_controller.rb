class AuthController < ApplicationController


  def callback
    provider_user = request.env['omniauth.auth']
    # render :json => provider_user

    # Find or create a user
    user = User.find_or_create_by(provider_id:provider_user['uid'],provider:params[:provider]) do |u|
      u.provider_hash = provider_user['credentials']['token']
      u.name = provider_user['info']['name']
      u.email = provider_user['info']['email']
    end

    # Create a session for that user
    session[:user_id] = user.id

    # Sned them home
    redirect_to root_path
  end

  def logout
    session[:user_id] = nil
    redirect_to root_path
  end

  def failure
    # TODO: display error message
    render plain: 'This is a failure'
  end
end
