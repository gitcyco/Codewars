# 4 kyu Path Finder #1: can you reach the exit?
# 
# You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West).
# Return true if you can reach position [N-1, N-1] or false otherwise.
# 
#     Empty positions are marked ..
#     Walls are marked W.
#     Start and exit positions are empty in all test cases.
# 
# Answer:
def path_finder(str_maze):
    maze = str_maze.split('\n')
    length = len(maze) - 1
    dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    return walk(maze, 0, 0, length, {}, dirs)

def walk(maze, x, y, length, seen, dirs):
    if x == length and y == length:
        return True
    if x >= 0 and y >= 0 and x <= length and y <= length and maze[y][x] == '.' and (x,y) not in seen:
        seen[(x,y)] = True
        for xx,yy in dirs:
            if walk(maze, x + xx, y + yy, length, seen, dirs): return True
    return False