# i = 0

taco = [1, 2, 3]

# p is similar to puts something.inspect
# p is also like print with a new line
# puts taco
# print taco
# p taco
# puts taco.inspect
puts taco.length

if taco.length == 3
  puts 'array is 3'
  # OR puts "array is " + taco.length.to_s
  # OR puts "array is #{taco.length.to_s}"
end

dog = {
  name: 'Fido',
  bread: 'huskie'
}

puts dog
