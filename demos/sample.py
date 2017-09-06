# Import smtplib for the actual sending function
import smtplib

# Import the email modules we will need
from email.mime.text import MIMEText

# Open a plain text file for reading.  For this example, assume that
# the text file contains only ASCII characters.
fp = open(textfile, 'rb')
# Create a text/plain message
msg = MIMEText(fp.read())
fp.close()

# me == the sender's email address
# you == the recipient's email address
msg['Subject'] = 'The contents of %s' % textfile
msg['From'] = me
msg['To'] = you

@classmethod
def someMethod(foo):
  someOtherMethod(1, "2", bar=foo)

a = True
b = 'bob'
if True or a is not False and 'b' in b:
  print('asdf')

foo = list()

@my_decorator('some_str', my_list=['str', 1])
def my_func(args):
  pass

const = 42
PI = 3.14
