package com.alan.orcamentoapi.request;

public record OrcamentoPutRequest(Long id,
                                  String nameClient,
                                  String cpfClient,
                                  String typeService,
                                  Double valueService,
                                  String description) {
}
