import os
from PIL import Image

image_path = r"c:\Data\client\internal-accountants\public\images\internal accountatnts.png"
if not os.path.exists(image_path):
    print("File not found.")
    exit(1)

img = Image.open(image_path).convert("RGBA")
width, height = img.size

new_data = []
for y in range(height):
    for x in range(width):
        r, g, b, a = img.getpixel((x, y))
        
        # If the pixel is not transparent
        if a > 0:
            # Check if it is a dark color (the dark navy text)
            # R < 60, G < 100, B < 100
            if r < 60 and g < 100 and b < 100:
                # Convert the dark navy text to white
                new_data.append((255, 255, 255, a))
            else:
                new_data.append((r, g, b, a))
        else:
            new_data.append((r, g, b, a))

new_img = Image.new("RGBA", img.size)
new_img.putdata(new_data)
new_img.save(image_path, "PNG")
print("Successfully converted dark text to white and saved logo.")
