import os
from PIL import Image

image_path = r"c:\Data\client\internal-accountants\public\images\internal accountatnts.png"
if not os.path.exists(image_path):
    print("File not found.")
    exit(1)

img = Image.open(image_path).convert("RGBA")
width, height = img.size

# Find distinct colors with opacity > 0
colors = {}
for y in range(height):
    for x in range(width):
        r, g, b, a = img.getpixel((x, y))
        if a > 10:  # non-transparent
            color_key = (r, g, b)
            colors[color_key] = colors.get(color_key, 0) + 1

# Print top 15 most frequent colors
sorted_colors = sorted(colors.items(), key=lambda x: x[1], reverse=True)
print("Top colors:")
for color, count in sorted_colors[:15]:
    print(f"Color: {color}, Count: {count}")
