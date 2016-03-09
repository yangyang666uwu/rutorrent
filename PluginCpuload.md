
---

# Plugin Cpuload #

---




&lt;wiki:TOC /&gt;



## Description ##

This plugin adds a CPU Load usage bar to the bottom toolbar.

![http://img217.imageshack.us/img217/1285/screenshot20100613at757.png](http://img217.imageshack.us/img217/1285/screenshot20100613at757.png)

## How it Works ##

The plugin is purely for cosmetic use.  It's pretty generalized in it's current state, and should not be taken as 100% accurate.


The formula for cpuload, currently is

**`min(load_average[0]*100/processors_count,100)`**

where `load_average[0]` - count of processes in run queue in the last
minute.

processors\_count is always 1 for non-Linux systems.