import os
from PIL import Image

image_path = r"c:\Data\client\internal-accountants\public\images\internal accountatnts.png"
if not os.path.exists(image_path):
    print(f"File not found: {image_path}")
    exit(1)

img = Image.open(image_path).convert("RGBA")
width, height = img.size
print(f"Logo Size: {width}x{height}")

# Inspect first few pixels on the corners to see what background color it is
pixels = img.load()
corner_colors = [pixels[0, 0], pixels[width-1, 0], pixels[0, height-1], pixels[width-1, height-1]]
print(f"Corner pixels: {corner_colors}")

# Remove white background: convert any white or near-white pixels (e.g. R, G, B > 240) to transparent
new_data = []
for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        # If the pixel is close to pure white, make it transparent
        if r > 240 and g > 240 and b > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append((r, g, b, a))

new_img = Image.new("RGBA", img.size)
new_img.putdata(new_data)

# Save over the original
new_img.save(image_path, "PNG")
print("Successfully removed background and saved transparent logo.")
