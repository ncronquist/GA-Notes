c = [7,2,8,3,1,9,5,6,4]

def merge(arr1, arr2)

  arr3 = []

  loop do
    arr3 << (arr1[0] <= arr2[0] ? arr1.shift : arr2.shift)
    break if arr1.length == 0 || arr2.length == 0
  end

  arr3.concat(arr1).concat(arr2)

end

def mergeSort(arr)

  # if the arr length is 1 return the arr as sorted
  return arr if arr.length == 1

  # if the arr length is greater than 1; split the array into two halves
  left = arr[0,arr.length/2]
  right = arr[arr.length/2, arr.length - 1]

  # Now that we have to halves of the array, run merge sort again
  left = mergeSort(left)
  right = mergeSort(right)

  # Once the merge sort returns something, actually merge the two sides
  # As the last thing in this method, it will be returned
  merge(left, right)

end


p mergeSort(c)
