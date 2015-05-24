a = [1,3,5,9,13]
b = [2,3,7]

def merge(arr1, arr2)

  arr3 = []

  loop do
    arr3 << (arr1[0] <= arr2[0] ? arr1.shift : arr2.shift)
    break if arr1.length == 0 || arr2.length == 0
  end

  arr3.concat(arr1).concat(arr2)

end

# p merge(a,b)


c = [7,2,8,3,1,9,5,6,4]

$l = 0
$r = 0

def mergeSort(arr)

  return arr if arr.length == 1
  mid = arr.length / 2
  left = arr.slice!(0,mid)
  right = arr

  left = mergeSort(left)
  # puts "l = #{$l} -- left = #{left}"
  puts "#{$l.times { print '-'}} left = #{left}"
  $l += 1
  right = mergeSort(right)
  # puts "r = #{$r} -- right = #{right}"
  puts "#{$r.times { print '-'}} right = #{right}"
  $r += 1


  merge(right, left)

end

p mergeSort(c)
