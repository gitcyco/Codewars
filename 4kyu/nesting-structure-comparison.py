# 4 kyu Nesting Structure Comparison
# 
# Complete the function/method (depending on the language) to return true/True when its argument is an array 
# that has the same nesting structures and same corresponding length of nested arrays as the first array.
# 
# For example:
# 
# # should return True
# same_structure_as([ 1, 1, 1 ], [ 2, 2, 2 ] )
# same_structure_as([ 1, [ 1, 1 ] ], [ 2, [ 2, 2 ] ] )
# 
# # should return False 
# same_structure_as([ 1, [ 1, 1 ] ], [ [ 2, 2 ], 2 ] )
# same_structure_as([ 1, [ 1, 1 ] ], [ [ 2 ], 2 ] )
# 
# # should return True
# same_structure_as([ [ [ ], [ ] ] ], [ [ [ ], [ ] ] ] )
# 
# # should return False
# same_structure_as([ [ [ ], [ ] ] ], [ [ 1, 1 ] ] )
# 
# Answer:
def same_structure_as(original,other):
    if isinstance(original, list) and not isinstance(other, list): return False
    if not isinstance(original, list) and isinstance(other, list): return False
    if isinstance(original, list) and isinstance(other, list):
        if len(original) != len(other): return False
        for i,e in enumerate(original):
            if isinstance(e, list):
                if not isinstance(other[i], list): return False
                return same_structure_as(e, other[i])
            elif isinstance(other[i], list): return False
    return True