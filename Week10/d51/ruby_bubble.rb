# array = [9,2,7,3,6,8,0,5,1,4]
array = [9,1,2,8,6,3,4,5,7]

total = 0
loop do
  i = 0
  value_moved = false
  (array.length - i - 1).times do
    total += 1
    p total
    if array[i] > array[i+1]
      array[i], array[i+1] = array[i+1], array[i]
      value_moved = true;
    end
    i += 1
  end

  p array
  break if value_moved == false
end

