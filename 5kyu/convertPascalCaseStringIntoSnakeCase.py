# 5 kyu Convert PascalCase string into snake_case
#
# Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation.
# Lowercase characters can be numbers. If the method gets a number as input, it should return a string.
# Examples
#
# "TestController"  -->  "test_controller"
# "MoviesAndBooks"  -->  "movies_and_books"
# "App7Test"        -->  "app7_test"
# 1                 -->  "1"
#
# Answer:
import re

def to_underscore(string):
    return re.sub(r'^_', '', re.sub(r'[A-Z]', lambda m: '_' + m.group(0).lower(), str(string)))