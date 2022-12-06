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
password=$1
if [[ ${#1} -ge 6 && "$1" == *[A-Z]* && "$1" == *[a-z]* && "$1" == *[0-9]* ]]
  then echo "true";
else
  echo "false";
fi