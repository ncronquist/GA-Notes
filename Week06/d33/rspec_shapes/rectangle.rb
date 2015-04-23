class Rectangle

  attr_accessor :width, :height

  def initialize width, height
    puts 'rectangle initialized'
    @width = width
    @height = height
  end

  def area
    @height * @width
  end
end



# Rectangle.new 5,3

