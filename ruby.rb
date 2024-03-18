# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach
# Bike class
class Bike
  # add all the attributes that need to be accessed
  attr_accessor :bike, :model, :wheels, :current_speed

  # Initialize the model name and input speed that defaults to zero
  def initialize(model, current_speed = 0)
    # Set bike = true saying it exists
    @bike = true
    # Set model to model as it expects a string
    @model = model
    # Set default number of wheels to 2
    @wheels = 2
    # Set current_speed equal to current_speed
    @current_speed = current_speed
  end

  # Method to allow the current_speed to be increased
  def pedal_faster(amount)
    # Updates current speed to the input amount
    @current_speed += amount
  end

  # Method handling the input of a brake speed
  def brake(amount)
    # Sets what happens if the amount entered is lower than the current_speed
    if amount > current_speed
      # When the input amount is higher than the current speed, it defaults the speed back to zero
      @current_speed = 0
    else
      # When the input amount is lower than the current_speed, it decreases the current speed by the input amount
      @current_speed -= amount
    end
  end

  # Method setting the number of wheels the bike contains if its made into a tricycle
  def make_tricycle
    # Sets the number of wheels a tricycle has
    @wheels = 3
  end

  # Method returning a string with the Bike classes info.
  def bike_info
    # A sentence using string interpolation to return the info from model, wheels and current_speed.
    "The #{@model} bike has #{@wheels} wheels and is going #{current_speed} mph."
  end
end
