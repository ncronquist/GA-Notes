# https://itunes.apple.com/search?item=mgmt

require 'typhoeus'
require 'awesome_print'

request = Typhoeus::Request.new(
  "itunes.apple.com/search",
  method: :get,
  params: {term: "mgmt"}
)

response = request.run

awesome_print JSON.parse(response.body)
