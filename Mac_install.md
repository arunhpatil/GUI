# Welcome to installation protocol for Mac OS

## Install python3.8

Download python 3.8.6 from [python.org](https://www.python.org/downloads/release/python-386/)
Follow the regular installation procedure after downloading.

Mac comes with python2.7 installed by default. To use python3.8, creating an alias in .bash_profile would do the trick
Open a new terminal window. Use vim editor if you are familiar using this editor `vi .bash_profile` or open the .bash_profile using text editor by `open -e .bash_profile` and add the following line at the bottom of the text.

`alias python=python3.8`

Save and exit. After that type `source ~/.bash_profile` on the command line -Or- simply, close the terminal. 

## Installing miRge3.0

### First install miRge dependenceis 

```
python3.8 -m pip install --user cutadapt==2.7 reportlab==3.5.42 biopython==1.77  scikit-learn==0.23.1  hypothesis==5.15.1 pytest==5.4.2  scipy==1.4.1  matplotlib==3.2.1  joblib==0.15.1  pandas==1.0.3 future==0.18.2
```

If you encounter a `WARNING`, like below:
```
WARNING: The script cutadapt is installed in '/Users/loaneruser/Library/Python/3.8/bin' which is not on PATH.
  Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.
```

Then, open a new terminal window or type `cd ` to get to home directory. Add `bin` folder PATH to the .bash_profile, as shown below:
Example: ``` export PATH=$PATH:"/Users/loaneruser/Library/Python/3.8/bin/" ```
Remeber to add your path `/PATH_TO_USERS/Python/3.8/bin`. 

### Install miRge3.0 by this simple command
`python3.8 -m pip install --user  -i  https://test.pypi.org/simple/  mirge==0.1.52`


