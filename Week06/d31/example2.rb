taco = 9
$taco2 = 9

def print_something num
  # puts taco #=> doesn't work
  puts $taco2
  puts num
end

print_something 8
