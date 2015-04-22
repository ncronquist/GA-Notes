class Rectangle
  attr_accessor :width, :height

  def initialize (width, height)
    @width = width
    @height = height
  end

  def area
    @width * @height
  end
end

r1 = Rectangle.new(10,12)
r2 = Rectangle.new(5,9)

puts r1
puts r1.inspect
r1.height = 15
p r1
puts r1.area
puts '*'*12
puts r2
puts r2.inspect
p r2
puts r2.area

