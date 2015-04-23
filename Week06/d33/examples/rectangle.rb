class Rectangle
  attr_accessor :height, :width

  @@count = 0

  def initialize (height, width)
    @height = height
    @width = width
    @@count += 1
  end

  def area
    @height * @width
  end

  def perimeter
    2 * (@height + @width)
  end

  def count
    @@count
  end
end

class Square < Rectangle

  def initialize side
    # @height = side
    # @width = side
    # @@count += 1
    # OR
    super(side,side)
  end

end

class Cube < Square
  def initialize side
    super(side)
    @length = side
  end

  def volume
    @height * @width * @length
  end
end


r1 = Rectangle.new(5,6)
r2 = Rectangle.new(10,15)
s1 = Square.new(5)
c1 = Cube.new(5)

p c1.volume

p s1
p s1.area

p r1
p r1.area
p r1.perimeter
p r1.count


p r2
p r2.count
p r1.count
