class DogsController < ApplicationController

  before_action :set_dog, only: [:show, :udpate, :destroy]
  respond_to :json

  def index

    respond_with Dog.all

  end

  def create

    if valid_email? (params[:email])
      render json: { success: "Accepted email format."}
    else
      render json: { invalid: "Invalid email format"}, status: :bad_request
    end
  end

  def show

    respond_with @dog

  end

  def destroy
  end

  private

  def set_dog
    @dog = Dog.find(params[:id])
  end

  def valid_email?(email_address)
    !!(email_address =~ /.+\@.+\..+/)
  end

end
