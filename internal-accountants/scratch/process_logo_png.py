import os
from PIL import Image

image_path = r"c:\Data\client\internal-accountants\public\images\logo.png"
if not os.path.exists(image_path):
    print("logo.png not found.")
    exit(1)

img = Image.open(image_path).convert("RGBA")
width, height = img.size

# Step 1: Make white background transparent
pixels = img.load()
new_data = []
for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        # Any pixel close to white becomes transparent
        if r > 230 and g > 230 and b > 230:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append((r, g, b, a))

temp_img = Image.new("RGBA", img.size)
temp_img.putdata(new_data)

# Step 2: Auto-crop the transparency padding
bbox = temp_img.getbbox()
if bbox:
    cropped_img = temp_img.crop(bbox)
    print(f"Cropped to: {cropped_img.size}")
else:
    print("Logo is empty after background removal!")
    cropped_img = temp_img

# Step 3: Convert dark pixels to white for dark theme contrast
final_data = []
w, h = cropped_img.size
for y in range(h):
    for x in range(w):
        r, g, b, a = cropped_img.getpixel((x, y))
        if a > 0:
            # If the pixel is dark navy/black, make it white
            if r < 100 and g < 100 and b < 100:
                final_data.append((255, 255, 255, a))
            else:
                final_data.append((r, g, b, a))
        else:
            final_data.append((r, g, b, a))

final_img = Image.new("RGBA", cropped_img.size)
final_img.putdata(final_data)

# Save processed logo
final_img.save(image_path, "PNG")
print("Successfully processed logo.png: transparent background, inverted text, cropped.")
