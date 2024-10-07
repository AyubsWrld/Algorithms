# Compiler
CC = g++

# Compiler flags
CFLAGS = -g

# Target file
TARGET = euclid 

# Source file
SRC = euclid.cpp

# Object file
OBJ = euclid 

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
