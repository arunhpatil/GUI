# Welcome to installation protocol for Mac OS

> ### **System prerequisites** 
- `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
- `brew update`
- `brew install wget`

## Install python3.7
Please note, any version other than py3.7 causes error in Mac with multiprocessing, [issues-1](https://github.com/darkskyapp/forecast-ruby/issues/13), [issues-2](https://stackoverflow.com/questions/50168647/multiprocessing-causes-python-to-crash-and-gives-an-error-may-have-been-in-progr).

Download python 3.7.5 from [python.org](https://www.python.org/downloads/release/python-375/)
```
wget https://www.python.org/ftp/python/3.7.5/python-3.7.5-macosx10.9.pkg
sudo installer -pkg python-3.7.5-macosx10.9.pkg -target /
```

Mac comes with python2.7 installed by default. To use python3.7, creating an alias in .bash_profile would do the trick
Open a new terminal window. Use vim editor if you are familiar using this editor `vi .bash_profile` or open the .bash_profile using text editor by `open -e .bash_profile` and add the following line at the bottom of the text.

`alias python=python3.7`

Save and exit. After that type `source ~/.bash_profile` on the command line -Or- simply, close the terminal. 

## Installing miRge3.0

### First install miRge dependenceis 

```
python3.7 -m pip install --user cutadapt==2.7 reportlab==3.5.42 biopython==1.77  scikit-learn==0.23.1  hypothesis==5.15.1 pytest==5.4.2  scipy==1.4.1  matplotlib==3.2.1  joblib==0.15.1  pandas==1.0.3 future==0.18.2
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
```
python3.7 -m pip install --user  -i  https://test.pypi.org/simple/  mirge==0.1.54
```

### Install additional C-libraries based tools 

> #### **Install Bowtie** 

- `wget -O bowtie-1.2.3-macos-x86_64.zip  https://sourceforge.net/projects/bowtie-bio/files/bowtie/1.2.3/bowtie-1.2.3-macos-x86_64.zip/download `
- `unzip bowtie-1.2.3-macos-x86_64.zip`
- `cd bowtie-1.2.3-macos-x86_64 `
- ` pwd` 
  + `/Users/loaneruser/Software/bowtie-1.2.3-macos-x86_64`
- Add this bowtie binaries to .bash_profile as shown below:
```
export PATH=$PATH:"/Users/loaneruser/Software/bowtie-1.2.3-macos-x86_64/"
```
- After that type `source ~/.bash_profile` on the command line -Or- simply, close the terminal. 

> #### **Install Samtools**

`brew install samtools`

> #### **Install RNA Fold**

- wget "https://www.tbi.univie.ac.at/RNA/download/sourcecode/2_4_x/ViennaRNA-2.4.16.tar.gz"
- cd ViennaRNA-2.4.16
```
sudo ./configure 
sudo make 
sudo make install
```

### Downloading FASTQ files from NCBI:
- wget -c https://ftp-trace.ncbi.nlm.nih.gov/sra/sdk/2.10.8/sratoolkit.2.10.8-mac64.tar.gz
- tar -xvzf sratoolkit.2.10.8-mac64.tar.gz 
- cd sratoolkit.2.10.8-mac64/bin
- `pwd`
  + `/Users/loaneruser/Software/sratoolkit.2.10.8-mac64/bin`
- Add to .bash_profile 
  + `cd `
  + `vi .bash_profile` or `open -e .bash_profile` and add the following line at the bottom of the page
  + `export PATH=$PATH:"/Users/loaneruser/Software/sratoolkit.2.10.8-mac64/bin"`

Save and exit. After that type `source ~/.bash_profile` on the command line -Or- simply, close the terminal. 


# GUI requirements
```
sudo ln -s /Users/loaneruser/Library/Python/3.8/bin/miRge3.0 /usr/local/bin/miRge3.0
sudo ln -s /Users/loaneruser/Library/Python/3.8/bin/cutadapt /usr/local/bin/cutadapt
sudo ln -s /Users/loaneruser/Software/bowtie-1.2.3-macos-x86_64/bowtie /usr/local/bin/bowtie
sudo ln -s /Users/loaneruser/Software/bowtie-1.2.3-macos-x86_64/bowtie-build /usr/local/bin/bowtie-build
```
