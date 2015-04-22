def FirstFactorial(num)

  arr = (1..num).reverse_each.to_a
  x = arr.reduce(1) do |total, n|
    total *= n
  end
  # code goes here
  return x

end

# keep this function call here
# to see how to enter arguments in Ruby scroll down
# FirstFactorial(STDIN.gets)

puts FirstFactorial(8)
