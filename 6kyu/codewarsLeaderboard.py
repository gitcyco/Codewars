# 6 kyu Codewars Leaderboard
# 
# Get the list of integers for Codewars Leaderboard score (aka Honor) in descending order
# 
# Note:
# if it was the bad timing, the data could be updated during your test cases.
# Try several times if you had such experience.
# 
# Answer:
import requests
from bs4 import BeautifulSoup
import re

def get_leaderboard_honor():
    req = requests.get('https://www.codewars.com/users/leaderboard')
    page = BeautifulSoup(req.content, 'html.parser')
    content = page.find_all('td', class_='honor')
    output = []
    for line in content:
        output.append(int(re.sub("[^\d\.]", "",line.text)))
    return output