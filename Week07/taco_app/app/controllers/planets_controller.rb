class PlanetsController < ApplicationController

  def index
    @planets = Planet.all
  end

  def new
    @planet = Planet.new
  end

  def create
    # render :json => params
    # planet_params = params.require(:planet).permit(:name,:desc)
    @planet = Planet.create(planet_params)
    redirect_to @planet
  end

  def show
    @planet = Planet.find(params[:id])
  end

  private

  def planet_params
    params.require(:planet).permit(:name,:desc)
  end

end
