# 6 kyu 1RM Calculator
# 
# You just got done with your set at the gym, and you are wondering how much weight you could
# lift if you did a single repetition. Thankfully, a few scholars have devised formulas for this purpose (from Wikipedia) :
# Epley
# 1 RM=w(1+r30)\Large\text{1 RM} = w(1 + \frac{r}{30})1 RM=w(1+30r​)
# McGlothin
# 1 RM=100w101.3−2.67123r\Large\text{1 RM} = \frac{100w}{101.3 - 2.67123r}1 RM=101.3−2.67123r100w​
# Lombardi
# 1 RM=wr0.10\Large\text{1 RM} = wr^{0.10}1 RM=wr0.10
# 
# Your function will receive a weight w and a number of repetitions r and must return your projected one repetition maximum.
# Since you are not sure which formula to use and you are feeling confident, your function will return the largest
# value from the three formulas shown above, rounded to the nearest integer.
# However, if the number of repetitions passed in is 1 (i.e., it is already a one rep max), your function must return w.
# Also, if the number of repetitions passed in is 0 (i.e., no repetitions were completed), your function must return 0.
# 
# Answer:
def calculate_1RM(w, r):
    if r == 0: return 0
    if r == 1: return w
    return max([epley(w,r), mcg(w,r), lomb(w,r)])

epley = lambda w,r: round(w * (1 + r / 30))
mcg = lambda w,r: round((100 * w) / (101.3 - 2.67123 * r))
lomb = lambda w,r: round(w * r ** 0.1)
