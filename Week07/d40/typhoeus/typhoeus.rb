# https://itunes.apple.com/search?item=mgmt

require 'typhoeus'
require 'awesome_print'

request = Typhoeus::Request.new(
  "itunes.apple.com/search",
  method: :get,
  params: {term: "mgmt"}
)

response = request.run
obj = JSON.parse(response.body)
# result = obj.results[0].wrapperType

# awesome_print(obj['results'][0])
obj["results"].map do |result|
  # return {artist_name: result.artist_name, track_name: result.track_name}
  puts "Artist: #{result["artistName"]}"
  puts "Track Name: #{result["trackName"]} \n\n"
end

# awesome_print(artist_track.to_s)
# awesome_print JSON.parse(response.body)

ap ENV["API_KEY"]
