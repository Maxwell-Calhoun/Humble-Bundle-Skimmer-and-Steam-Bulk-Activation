# Humble-Bundle-Skimmer-and-Steam-Bulk-Activation
A script that skims all of the keys present on a page of your keys for humble bundle and another script that will use the output to bulk activate the keys on steam.

For both scripts you will just copy and pase the contents of the js and paste it in to web browser terminal and then type main(); into the terminal.

For the humble bundle skimmer you will just need to go the your keys and entitlements section then go to the page of keys you want to activate as it will not go through every page of your keys. Once there you will just copy and paste the script into the terminal and call the function main(); . The script will iterate through all of the keys present tokenize it with a comma and then printout tokenized keys. These keys will serve as input for the steam script. This will be outputed to you within the terminal.

For the steam script you will go to the link below and all that is required at this point is you copy and paste it into the terminal and it will ask you for the input and you will just paste it in. If you have a bunch of keys from another website and you want to use this all you will need to do is tokenize the keys in the following format. AAAAA-BBBBB-CCCCC,AAAAA-BBBBB-CCCCC,AAAAA-BBBBB-CCCCC using ',' as the delimiter.

STEAM:
https://store.steampowered.com/account/registerkey

NOTES:
There is some kind of limit on how many keys can be activated about every hour from my testing and seems to be ~20 keys per hour you are allowed to activate and I am unaware of any way to get around this.
Only tested on chrome so can be sure that it works for other browsers but i dont have a reason to believe that this wouldnt be the case.
If your internet has higher latency to steam you might need to increase the setTimeout timer.
