# 5 kyu Regex Password Validation
# 
# You need to write regex that will validate a password to make sure it meets the following criteria:
# 
#     At least six characters long
#     contains a lowercase letter
#     contains an uppercase letter
#     contains a digit
#     only contains alphanumeric characters (note that '_' is not alphanumeric)
# 
# Answer:
regex=/^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)[A-Za-z0-9]{6,}$/