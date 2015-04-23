require_relative ('../square.rb')

describe Square do

  # before(:example) runs onece before every single test
  # before(:context) runs once before a bunch of tests
  before(:context) do
    @s = Square.new(5)
  end

  describe 'Initialization' do
    it "is an instance of the Square class" do
      expect(@s).to be_instance_of(Square)
    end
    it "it extends Rectangle class" do
      expect(@s).to be_kind_of(Rectangle)
    end
    it "should assign width" do
      expect(@s.width).to eq(5)
    end
    it "should assign height" do
      expect(@s.height).to eq(5)
    end
  end

  describe 'Accessors' do
    it "should be able to set/get width" do
      @s.width = 7
      expect(@s.width).to eq(7)
      expect(@s.height).to eq(7)
    end
    it "should be able to set/get height" do
      @s.height = 3
      expect(@s.height).to eq(3)
      expect(@s.width).to eq(3)
    end
  end

  describe "Methods" do
    it "should compute area" do
      expect(@s.area).to eq(3*3)
    end
  end

end
