result = []

ARGV.each do |arg|
  next unless arg =~ /^-?\d+$/
  i_arg = arg.to_i
  result << i_arg
  result.sort!
end

puts result
