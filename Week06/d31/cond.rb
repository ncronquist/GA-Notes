# looping = true

# while looping
#   print 'Enter a number: '
#   i = gets.chomp.to_i

#   if i == 5
#     puts 'it\'s 5!'
#   elsif i > 5
#     puts 'it\'s greater than 5!'
#   else
#     puts 'it\'s less than 5'
#   end

#   case i
#   when 1
#     puts 'it is 1'
#   when 2
#     puts 'it is 2. You escape!'
#     looping = false
#   else
#     puts 'it is not 1 or 2'
#   end

# end

# (0..5).each { |i| puts i }

# def sum(num1, num2)
#   num1 + num2
# end

# a = sum 1, 5
# puts sum 1, 5
# puts a

# arr = (1..5).to_a

# arr2 = arr.map { |i| i+=1 }

# p arr2

def sum(*args)
  # p args
  s = 0
  args.each do |arg|
    s += arg
  end
  return s
end

puts(sum(1,2,3))
