class Dog < ActiveRecord::Base
  validates :email, length: {minimum: 2, maximum: 25}
end
