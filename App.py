
import matplotlib.pyplot as plt
import numpy as np
from scipy.stats import norm

plt.style.use('dark_background')

num_div = 100

# divide the circle into num_div slices
div = 2 * np.pi/num_div

r = 1.35

# define the rule/function the decides the pattern inside the circle
def f(x):
   # try np.sin(2 * x)
   # x + x%2
   return 2 * x
   
# get polar co-ordinates for a point on the circle
def get_polars(n):
   return r * np.cos(n), r * np.sin(n)
   
fig, ax = plt.subplots(figsize=(5,5))
circle = plt.Circle((0, 0), r, edgecolor='w', facecolor='none')

ax.add_patch(circle)
ax.set_xlim(-1.5, 1.5)
ax.set_ylim(-1.5, 1.5)
   
for i in range(1, num_div+1):
   x, y = get_polars(i*div)
   x2, y2 = get_polars(f(i*div))
   # plot a line joining above two points on the circle
   plt.plot([x, x2], [y, y2])
      
plt.axis("off")
plt.savefig('magic_circle.png')
plt.show()
   
