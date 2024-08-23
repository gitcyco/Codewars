# 5 kyu Scraping: Get the Year a CodeWarrior Joined
# 
# Write a function that accepts a username from someone at Codewars and returns 
# a string containing the month and year (separated by a space) when they joined Codewars.
# Example:
# 
#       Input            Output
# ----------------     ----------
# "donaldsebleung" --> "Jan 2016"
#       "jhoffner" --> "Oct 2012"
# 
# Answer:
import urllib.request
from bs4 import BeautifulSoup

def get_member_since(username):
    url = f"https://www.codewars.com/users/{username}"
    with urllib.request.urlopen(url) as response:
        html = response.read()
        soup = BeautifulSoup(html, 'html.parser')
        divs = soup.find(filter_tags, class_="stat")
        return divs.b.next_sibling

def filter_tags(tag):
    return tag.b and tag.b.string == "Member Since:"
