# 3 kyu GET TO THE CHOPPA!
# 
# GET TO THE CHOPPA! DO IT NOW!
# 
# For this kata you must create a function that will find the shortest possible path between two nodes in a 2D grid of nodes.
# 
# Details:
# 
#     Your function will take three arguments: a grid of nodes, a start node, and an end node. 
# Your function will return a list of nodes that represent, in order, the path that one must follow to get from the start node to the end node. 
# The path must begin with the start node and end with the end node. No single node should be repeated in the path (ie. no backtracking).
# 
# def find_shortest_path(grid, start_node, end_node):
#     pass
# 
#     The grid is a list of lists of nodes. Each node object has a position that indicates where in the grid the node is (it's indices).
# 
# node.position.x  # 2
# node.position.y  # 5
# node.position  # (2,5)
# node is grid[2][5]  # True
# 
#     Each node may or may not be 'passable'. All nodes in a path must be passable. A node that is not passable is effectively a wall that the shortest path must go around.
# 
# a_node.passable  # True
# 
#     Diagonal traversals between nodes are NOT allowed in this kata. Your path must move in one of 4 directions at any given step along the path: left, right, up, or down.
#     Grids will always be rectangular (NxM), but they may or may not be square (NxN).
#     Your function must return a shortest path for grid widths and heights ranging between 0 and 200. This includes 0x0 and 200x200 grids.
#     0x0 grids should return an empty path list
#     When more than one shortest path exists (different paths, all viable, with the same number of steps) then any one of these paths will be considered a correct answer.
#     Your function must be efficient enough (in terms of time complexity) to pass all the included tests within the allowed timeframe (6 seconds).
# 
#     In python, for your convenience, a print_grid function exists that you can use to print a grid. 
#     You can also use print_grid to visualize a given path on the given grid. The print_grid function has the following signature:
# 
# def print_grid(grid, start_node=None, end_node=None, path=None)
# # output without a path
# """
# S0110
# 01000
# 01010
# 00010
# 0001E
# """
# 
# # output with a path
# """
# S0110
# #1###
# #1#1#
# ###1#
# 0001E
# """
# 
# Answer:
from preloaded import Node, print_grid # Use print_grid function to visualize a given path on the given grid. 
from collections import deque

def find_shortest_path(grid:"list[list[Node]]", start_node:Node, end_node:Node):
    if len(grid) == 0:
        return []
    queue = deque([start_node])
    dist = {}
    prev = {}
    seen = {}
    for row in grid:
        for col in row:
            dist[col] = float('inf')
            prev[col] = None
            seen[col] = False
    dist[start_node] = 0
    seen[start_node] = True;

    while(len(queue) > 0):
        node = queue.popleft()
        list = get_adj(grid, node)
        for adj in list:
            if seen[adj] == False:
                seen[adj] = True
                dist[adj] = dist[node] + 1
                prev[adj] = node
                queue.append(adj)
            if adj == end_node:
                queue.clear()
                break
    return walk_back(prev, end_node, start_node)

def walk_back(prev, end_node, start_node):
    if end_node == start_node:
        return [end_node]
    out = [end_node]
    next = prev[end_node]
    while(next != start_node):
        out.append(next)
        next = prev[next]
    out.append(start_node)
    out.reverse()
    return out

def get_adj(grid, node:Node):
    if len(grid) == 0:
        return []
    dirs = [[0,1], [1,0], [0,-1], [-1,0]]
    list = []
    for [dirX, dirY] in dirs:
        newX = node.position.x + dirX
        newY = node.position.y + dirY
        if newX >= 0 and newY >= 0 and newX < len(grid) and newY < len(grid[0]) and grid[newX][newY].passable:
            list.append(grid[newX][newY])
    return list