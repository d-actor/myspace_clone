100.times do
  name = Faker::Dune.character
  age =  Faker::Number.between(15, 80)
  bio = Faker::Lovecraft.paragraphs
  avatar = Faker::Avatar.image(name, '50x50', 'png', 'set2')
  Friend.create(name: name, age: age, bio: bio, avatar: avatar)
end
