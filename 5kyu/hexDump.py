# 5 kyu Hex Dump
# 
#     In computing, a hex dump is a hexadecimal view (on screen or paper) of computer data, from RAM 
#     or from a file or storage device. Looking at a hex dump of data is commonly 
#     done as a part of debugging, or of reverse engineering.
# 
#     In a hex dump, each byte (8-bits) is represented as a two-digit hexadecimal number. 
#     Hex dumps are commonly organized into rows of 8 or 16 bytes, sometimes separated by whitespaces. 
#     Some hex dumps have the hexadecimal memory address at the beginning and/or a checksum byte at the end of each line.
# 
# (source: https://en.wikipedia.org/wiki/Hex_dump)
# Your Task
# 
# Your task is to complete the functions hexdump and dehex:
# 
# hexdump takes a binary input (a bytes object) and returns a hex dump (as a string) in the following format:
# 
#     the memory address displayed as an 8-digit hexadecimal number (starting from 00000000), followed by a colon (:) and a space,
#     16 bytes displayed as 2-digit hexadecimal numbers, separated by a space,
#     two spaces,
#     the ASCII translation of the bytes if the ASCII values are between 32 and 126 (both included), otherwise a full stop (.)
# 
# Note: all hexadecimal values (data and addresses) should be presented in lowercase
# 
# If the last line is shorter than 16 bytes, then replace the byte values with spaces, but trim the trailing spaces from the end of the line.
# 
# For example:
# 
# 00000000: 1d c4 15 25 91 e6 09 59 04 99 15 29 0a 45 21 29  ...%...Y...).E!)
# 00000010: 26 8e 74 a0 1a be 75 68 06 dd 70 33 a4 77 7a 5d  &.t...uh..p3.wz]
# 00000020: b1 ba 22 a7 cf cc f7 ef b1 e3 13 ed f1 89 ad ad  ..".............
# 00000030: b8 2a 52 32 65 79 43 99 6f c8 d3 8e b2 5f 50 c9  .*R2eyC.o...._P.
# 00000040: 08 4a 12 25 79 c2 dd 31 6b b8 77 74 4b 68 4b d4  .J.%y..1k.wtKhK.
# 00000050: db 4e 92 09 d5 4c 9f 0b fd a9 d1                 .N...L.....
# 
# dehex takes a string input, in the same format as the output described above, and returns binary output.
# 
# Answer:
import re

def hexdump(data):
    items = ['{:02x}'.format(b) for b in data]
    all = [items[i:i + 16] for i in range(0, len(items), 16)]
    out = []
    start = 0
    for item in all:
        row = ""
        row += '{:08x}: '.format(start) + ' '.join(item)
        row = row.ljust(59)
        for byte in item:
            num = int(byte, 16)
            row += '.' if num < 32 or num > 126 else chr(num)
        out.append(row)
        start += 16
    return '\n'.join(out)

def dehex(text):
    rows = text.split('\n')
    out = bytes()
    for row in rows:
        b = re.sub("^[0-9a-f]{8}: ", "", row)
        b = re.sub(" {2,}.*", "", b)
        nums = [int(n,16) for n in b.split(' ')]
        out += bytes(nums)
    return out


