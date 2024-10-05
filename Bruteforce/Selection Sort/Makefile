# Compiler
CC = g++

# Compiler flags
CFLAGS = -Wall -g

# Target file
TARGET = program

# Source file
SRC = selection.cpp

# Object file
OBJ = selection

# Default rule: Build and run
all: $(TARGET)

# Rule to link the object file and create the executable
$(TARGET): $(OBJ)
	$(CC) $(OBJ) -o $(TARGET)

# Rule to create the object file from source
$(OBJ): $(SRC)
	$(CC) $(CFLAGS) -c $(SRC) -o $(OBJ)

# Clean up object file and executable
clean:
	rm -f $(OBJ) $(TARGET)

# Run the executable
run: all
	./$(TARGET)
