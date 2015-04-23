require_relative '../rectangle.rb'

describe Rectangle do

  # before(:example) runs onece before every single test
  # before(:context) runs once before a bunch of tests
  before(:context) do
    @r = Rectangle.new(5,2)
  end

  describe 'Initialization' do
    it "is an instance of the Rectangle class" do
      expect(@r).to be_instance_of(Rectangle)
    end
    it "should assign width" do
      expect(@r.width).to eq(5)
    end
    it "should assign height" do
      expect(@r.height).to eq(2)
    end
  end

  describe 'Accessors' do
    it "should be able to set/get width" do
      @r.width = 7
      expect(@r.width).to eq(7)
    end
    it "should be able to set/get height" do
      @r.height = 3
      expect(@r.height).to eq(3)
    end
  end

  describe "Methods" do
    it "should compute area" do
      expect(@r.area).to eq(7*3)
    end
  end

end
