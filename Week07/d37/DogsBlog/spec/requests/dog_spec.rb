require 'rails_helper'
require 'factory_girl_rails'

describe "Dog API" do

  describe "GET /dogs" do
    it "has a valid factory" do
      expect(FactoryGirl.build(:dog)).to be_valid
    end


    it "returns a successsful 200 response" do
      FactoryGirl.create :dog, name: "Max"
      FactoryGirl.create :dog, name: "Buford"
      get "/dogs", {}, {"Accept" => "application/json"}
      expect(response.status).to eq(200)
    end

    it "returns data of a dog" do
      m = FactoryGirl.create :dog, name: "Max"
      get "/dogs/#{m.id}", {}, {"Accept" => "application/json"}
      body = JSON.parse(response.body)
      expect(body['name']).to eq('Max')
    end

  end

  describe "GET /dogs/:id" do
    it "returns valid email" do
      m = FactoryGirl.create :dog, name: "Max"
      get "/dogs/#{m.id}", {}, {"Accept" => "application/json"}
      body = JSON.parse(response.body)
      expect(body['email']).to eq('My@String.com')
    end

    it "returns invalid email" do
      m = FactoryGirl.create :dog, name: "Max", email: '1'
      expect{get "/dogs/#{m.id}", {}, {"Accept" => "application/json"}}.to raise_error
    end

  end

  describe "POST /dogs" do
  end

  describe "DELETE /dogs/:id" do
  end

  # pending "add some examples to (or delete) #{__FILE__}"
end
