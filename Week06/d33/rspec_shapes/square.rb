require_relative 'rectangle.rb'

class Square < Rectangle
  def initialize side
    super(side, side)
  end

  def width= side
    @width=side
    @height=side
  end

  def height= side
    @width=side
    @height=side
  end

end
