import os
from PIL import Image

image_path = r"c:\Data\client\internal-accountants\public\images\logo.png"
if not os.path.exists(image_path):
    print("File not found.")
    exit(1)

img = Image.open(image_path).convert("RGBA")
width, height = img.size
print(f"New Logo Size: {width}x{height}")

# Print corner pixels
pixels = img.load()
corner_colors = [pixels[0, 0], pixels[width-1, 0], pixels[0, height-1], pixels[width-1, height-1]]
print(f"Corner pixels: {corner_colors}")

# Find most frequent colors
colors = {}
for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        if a > 10:
            colors[(r, g, b)] = colors.get((r, g, b), 0) + 1

sorted_colors = sorted(colors.items(), key=lambda x: x[1], reverse=True)
print("Top 15 Colors:")
for color, count in sorted_colors[:15]:
    print(f"Color: {color}, Count: {count}")
