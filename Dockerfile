FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/malvinking/SPEED-MD-V2.git /root/malvinking 

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/malvinking/node_modules

# Install dependencies
WORKDIR /root/malvinking 
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
# IF YOU ARE MODIFYING THIS BOT DONT CHANGE THIS  RUN rm -rf /root/malvinking/node_modules
