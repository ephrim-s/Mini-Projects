#Import Moduls
from PyQt5.QtCore import Qt
from PyQt5.QtWidgets import QApplication, QWidget, QLineEdit, QPushButton, QHBoxLayout, QVBoxLayout, QGridLayout

#Main App Obejct and Settings
app = QApplication([])
main_window = QWidget()
main_window.setWindowTitle("Calculator App")
main_window.resize(250,300)

#Create all App Objects
text_box = QLineEdit()
grid = QGridLayout()

buttons = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","=","+"
    ]

clear = QPushButton("Clear")
delete = QPushButton("<")

def button_click():
    button = app.sender()
    # text = button.text()
    if isinstance(button, QPushButton):
        text = button.text()  # Corrected from tex() to text()
    else:
        text = "="  # Treat Enter key as pressing "="

    if text == "=":
        symbol = text_box.text()
        try:
            res = eval(symbol)
            text_box.setText(str(res))

        except Exception as e:
            print("Error:", e)
    
    elif text == "Clear":
        text_box.clear()

    elif text == "<":
        current_text = text_box.text()
        text_box.setText(current_text[:-1])
    
    else:
        current_text = text_box.text()
        text_box.setText(current_text + text)

row = 0
col = 0

for text in buttons:
    button = QPushButton(text)
    button.clicked.connect(button_click)
    grid.addWidget(button, row, col)
    col +=1

    if col > 3:
        col = 0
        row += 1

#All Design Here
master_layout = QVBoxLayout()
master_layout.addWidget(text_box)
master_layout.addLayout(grid)

button_row = QHBoxLayout()
button_row.addWidget(clear)
button_row.addWidget(delete)


master_layout.addLayout(button_row)
main_window.setLayout(master_layout)


#Events
clear.clicked.connect(button_click)
delete.clicked.connect(button_click)
text_box.returnPressed.connect(button_click)
#Show/Run our App
main_window.show()
app.exec_()
